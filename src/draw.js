import { Circle, Rect } from "react-konva";
import _ from "lodash";

let direction1 = 1;
let direction2 = 1;

// export const drawCircles = (circles) => {
//     // circles.push(
//     //     <Circle
//     //         radius={15}
//     //         fill="#1EC1D4"
//     //         x={750 * 0.5 + 5 / 2}
//     //         y={initY + count}
//     //     />
//     // );

//     return;
// };

export const drawCircles = (circlesState) => {
    // let circle = {
    //     axisDeg: 60,
    //     x: 0,
    //     y: 0,
    //     direction: 1,
    //     color: "orange"
    // }

    let newCircles = [];
    let newCirclesState = [];

    for (let i = 0; i < circlesState.length; i++) {
        let circle = circlesState[i];
        let { speed, direction } = circle;

        let isObtAng = false;

        if (circle.axisDeg > 90) {
            isObtAng = true;
        }

        let angle = circle.axisDeg * (Math.PI / 180);
        let lowerAngle = (180 + circle.axisDeg) * (Math.PI / 180);

        let xDiff = Math.cos(angle);
        let yDiff = Math.sin(angle);

        let newX;
        let newY;

        let axisXUpper = Math.cos(angle) * 300 + 300;
        let axisYUpper = 600 - (Math.sin(angle) * 300 + 300);

        let axisXLower = Math.cos(lowerAngle) * 300 + 300;
        let axisYLower = 600 - (Math.sin(lowerAngle) * 300 + 300);

        // slowwing

        if (isObtAng) {
            if (
                circle.x < axisXUpper + 30 * Math.cos(lowerAngle) ||
                circle.x > axisXLower - 30 * Math.cos(lowerAngle)
            ) {
                speed = 60 / (270 / speed);
            }
        } else {
            if (
                circle.x > axisXUpper - 30 * Math.cos(angle) ||
                circle.x < axisXLower + 30 * Math.cos(angle)
            ) {
                speed = 60 / (270 / speed);
            }
        }

        if (isObtAng) {
            if (
                circle.x - xDiff * speed < axisXUpper ||
                circle.y - yDiff * speed < axisYUpper
            ) {
                direction = 2;
            } else if (
                circle.x + xDiff * speed > axisXLower ||
                circle.y + yDiff * speed > axisYLower
            ) {
                direction = 1;
            }
        } else {
            if (
                circle.x + xDiff * speed > axisXUpper ||
                circle.y - yDiff * speed < axisYUpper
            ) {
                direction = 2;
            } else if (
                (circle.y + yDiff * speed > axisYLower &&
                    circle.axisDeg !== 0) ||
                circle.x - xDiff < axisXLower
            ) {
                direction = 1;
            }
        }

        if (direction === 2) {
            newX = circle.x - xDiff * speed;
            newY = circle.y + yDiff * speed;
        } else if (direction === 1) {
            newX = circle.x + xDiff * speed;
            newY = circle.y - yDiff * speed;
        }

        newCirclesState.push({
            axisDeg: circle.axisDeg,
            x: newX,
            y: newY,
            direction: 1,
            color: circle.color,
            speed: circle.speed,
            direction,
        });

        newCircles.push(
            <Circle
                key={circle.axisDeg}
                radius={15}
                fill={circle.color}
                x={newX}
                y={newY}
            />
        );
    }

    // let distances = [];

    // let dist = Math.sqrt(
    //     Math.pow(newCirclesState[0].x - newCirclesState[2].x, 2) +
    //         Math.pow(newCirclesState[0].y - newCirclesState[2].y, 2)
    // );
    // distances.push(dist);
    // console.log(dist);
    return { newCircles, newCirclesState };
};

export const drawAxes = (numberOfAxes) => {
    // axes = 3

    let degrees = 180 / numberOfAxes;
    let axes = [];

    for (let i = 0; i < numberOfAxes; i++) {
        let axisDegree = i * degrees;
        let angle = (180 + axisDegree) * (Math.PI / 180);

        let axisX = Math.cos(angle) * 300 + 300; // cos(240) * 300 + 300
        let axisY = 600 - (Math.sin(angle) * 300 + 300); // 600 - sin(240) * 300 + 300
        // angle = 180 + axisDegree

        let axis = (
            <Rect
                key={axisDegree}
                fill="#FFFDFF"
                width={600}
                height={6}
                x={axisX}
                y={axisY}
                rotation={-axisDegree}
            />
        );

        axes.push(axis);
    }
    return axes;
};
