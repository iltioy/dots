import { Stage, Layer, Rect, Line } from "react-konva";
import { useEffect, useState } from "react";
import { drawCircle, drawCircles } from "./draw";

let iCircles = [];

const numberOfAxes = 2;

function App() {
    const [circles, setCircles] = useState({
        x: 750 * 0.1,
        y: 750 / 2,
        direction: 2,
        color: "green",
    });

    const [axes, setAxes] = useState();

    const addCircle = () => {
        let circle = {
            x: 750 * 0.1,
            y: 750 / 2,
            direction: 2,
            color: "green",
        };

        setCircles((prevState) => {
            return [...prevState, circle];
        });
    };

    useEffect(() => {
        let timer = setInterval(() => {
            //iCircles = drawCircles(circles);
            //setCircles(iCircles);

            setCircles(drawCircle(circles));
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <Stage width={750} height={750} className="stage">
                <Layer width={600} height={600} x={750 * 0.1} y={750 * 0.1}>
                    <Rect
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
                    <Rect height={6} width={6} y={560} x={150} fill="red" />
                </Layer>
            </Stage>
        </div>
    );
}

export default App;
