import { Circle, Rect } from "react-konva";
import _ from "lodash";

let direction1 = 1;
let direction2 = 1;

export const drawCircles = (circles) => {
    // circles.push(
    //     <Circle
    //         radius={15}
    //         fill="#1EC1D4"
    //         x={750 * 0.5 + 5 / 2}
    //         y={initY + count}
    //     />
    // );

    return;
};

export const drawCircle = (circle) => {
    return;
};

export const drawAxes = (numberOfAxes) => {
    // axes = 3

    let degrees = 180 / numberOfAxes;
    let axes = [];

    for (let i = 0; i < numberOfAxes; i++) {
        let axisDegree = i * degrees;
        let angle = 180 + axisDegree;

        let axisX; // cos(240) * 300 + 300
        let axisY; // 600 - sin(240) * 300 + 300
        // angle = 180 + axisDegree

        let axis = (
            <Rect
                fill="#FFFDFF"
                width={600}
                height={6}
                x={150}
                rotation={-axisDegree}
            />
        );
    }

    return axes;
};
