import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { ModelViewerElement } from "@google/model-viewer"

const models = [
	["İnterfaz", "İnterfaz"],
	["Profaz", "Profaz - Başı"],
	["Metafaz", "Profaz - Sonu"],
	["Anafaz", "Metafaz"],
	["Telofaz", "Anafaz"],
	["Sitokinez", "Telofaz ve Sitokinez"],
]

const ModelViewer = React.forwardRef<any, any>((props, ref) => {
	//@ts-ignore
	return <model-viewer ref={ref} {...props}></model-viewer>;
});

function App() {
	const [Index, setIndex] = useState(0);
	const viewerRef = useRef();

	useEffect(() => {
		(viewerRef.current as unknown as HTMLElement).ondblclick = () => {
			setIndex(Index + 1)
		}
	})

	return (
		<div className="size-full flex flex-col *:w-full p-2">
			<div className="flex justify-center *:w-1/4 gap-2">
				<button className="btn btn-square" onClick={() => setIndex(Index - 1)}>Önceki</button>
				<button className="btn btn-square" onClick={() => setIndex(Index + 1)}>Sonraki</button>
			</div>
			<div className="flex justify-center select-none my-4">
				{models.at(Index % models.length)![1]}
			</div>
			<ModelViewer
				src={`/CellModels/models/${models.at(Index % models.length)![0]}.glb`}
				ar
				ref={viewerRef}
				camera-controls
				disable-tap
				interaction-prompt={false}
			>
				<div id="" slot="progress-bar"></div>
			</ModelViewer>
		</div>
	)
}

export default App;