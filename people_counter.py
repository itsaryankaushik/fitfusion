# import libraries
import cv2
import numpy as np
from sort import Sort  # import SORT tracker

# initialize video capture
cap = cv2.VideoCapture("video.mp4")

# load YOLO model
net = cv2.dnn.readNet("yolov3.weights", "yolov3.cfg")
classes = []
with open("coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]
layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]

# initialize SORT tracker
tracker = Sort()

# define ROI coordinates
roi_x1 = 100
roi_y1 = 100
roi_x2 = 500
roi_y2 = 500

# initialize count variables
in_count = 0
out_count = 0

# loop over frames
while True:
    # read frame
    _, frame = cap.read()

    # get frame dimensions
    height, width, channels = frame.shape

    # draw ROI rectangle
    cv2.rectangle(frame, (roi_x1, roi_y1), (roi_x2, roi_y2), (0, 255, 0), 2)

    # convert frame to blob
    blob = cv2.dnn.blobFromImage(
        frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)

    # feed blob to YOLO model
    net.setInput(blob)
    outs = net.forward(output_layers)

    # initialize lists for detection results
    class_ids = []
    confidences = []
    boxes = []

    # loop over detection results
    for out in outs:
        for detection in out:
            # get class ID and confidence
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            # filter out low confidence detections and non-person detections
            if confidence > 0.5 and class_id == 0:  # class ID 0 is for person
                # get bounding box coordinates
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # convert to top-left corner coordinates
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                # append results to lists
                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)

    # apply non-maxima suppression to remove overlapping boxes
    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

    # convert boxes to numpy array
    boxes = np.array(boxes)

    # feed boxes to SORT tracker and get updated tracks
    tracks = tracker.update(boxes)

    # loop over tracks
    for track in tracks:
        # get track ID and bounding box coordinates
        track_id = int(track[4])
        x1 = int(track[0])
        y1 = int(track[1])
        x2 = int(track[2])
        y2 = int(track[3])

        # draw bounding box and label on frame
        cv2.rectangle(frame, (x1, y1), (x2, y2), (255, 0, 0), 2)
        cv2.putText(frame, str(track_id), (x1, y1 - 15),
                    cv2.FONT_HERSHEY_PLAIN, 2, (255, 0, 0), 2)

        # check if track is crossing the ROI boundary
        if y1 < roi_y1 and y2 > roi_y1:  # crossing from bottom to top
            out_count += 1  # increment out count

        elif y1 < roi_y2 and y2 > roi_y2:  # crossing from top to bottom
            in_count += 1  # increment in count

    # draw counts on frame
    cv2.putText(frame, "In: " + str(in_count), (10, 50),
                cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)
    cv2.putText(frame, "Out: " + str(out_count), (10, 100),
                cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

    # show frame
    cv2.imshow("Frame", frame)

    # wait for key press or end of video
    key = cv2.waitKey(30)
    if key == ord("q") or cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        break

# release video capture and close windows
cap.release()
cv2.destroyAllWindows()
