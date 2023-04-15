import { Stage, Layer, Rect, Line } from "react-konva";
import { useEffect, useState } from "react";
import { drawAxes, drawCircle, drawCircles } from "./draw";

let iCircles = [];

const numberOfAxes = 2;

let circlesState = [
    {
        axisDeg: 60,
        x: 165,
        y: 533.826859022,
        direction: 1,
        color: "blue",
        speed: 3,
    },
    // {
    //     axisDeg: 120,
    //     x: 300,
    //     y: 300,
    //     direction: 1,
    //     color: "yellow",
    //     speed: 1,
    // },
    {
        axisDeg: 0,
        x: 30,
        y: 300,
        direction: 2,
        color: "red",
        speed: 3,
    },
    // {
    //     axisDeg: 60,
    //     x: 300,
    //     y: 300,
    //     direction: 1,
    //     color: "green",
    //     speed: 2,
    // },
];

function App() {
    const [circles, setCircles] = useState([]);

    const [axes, setAxes] = useState([]);

    // const addCircle = () => {
    //     let circle = {
    //         x: 750 * 0.1,
    //         y: 750 / 2,
    //         direction: 2,
    //         color: "green",
    //     };

    //     setCircles((prevState) => {
    //         return [...prevState, circle];
    //     });
    // };

    useEffect(() => {
        let timer = setInterval(() => {
            //iCircles = drawCircles(circles);
            //setCircles(iCircles);

            let { newCircles, newCirclesState } = drawCircles(circlesState);

            circlesState = newCirclesState;

            setCircles(newCircles);
        }, 17);

        setAxes(drawAxes(3));

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <Stage width={750} height={750} className="stage">
                <Layer width={600} height={600} x={750 * 0.1} y={750 * 0.1}>
                    {axes}
                    {circles}
                    {/* <Rect
                        height={6}
                        y={560}
                        x={300 / 2}
                        width={600}
                        fill="#FFFDFF"
                        rotation={-60}
                    />

                    <Rect
                        height={6}
                        width={600}
                        y={300}
                        x={0}
                        fill="#FFFDFF"
                        rotation={0}
                    />

                    <Rect
                        height={6}
                        width={600}
                        y={600}
                        x={300}
                        fill="#FFFDFF"
                        rotation={-90}
                    />

                    <Rect
                        height={6}
                        width={600}
                        y={472}
                        x={545}
                        fill="#FFFDFF"
                        rotation={-145}
                    />

                    <Rect height={6} width={6} y={41} x={450} fill="red" />
                    <Rect height={6} width={6} y={560} x={150} fill="red" /> */}
                </Layer>
            </Stage>
        </div>
    );
}

export default App;
