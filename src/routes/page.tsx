import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { ModelViewerElement } from "@google/model-viewer"

const models = {
	Mitoz: [
		"İnterfaz",
		"Profaz_Başı",
		"Profaz_Sonu",
		"Metafaz",
		"Anafaz",
		"Telofaz_Ve_Sitokinez",
	],
	Mayoz: [
		"İnterfaz",
		"Profaz_1",
		"Metafaz_1",
		"Anafaz_1",
		"Telofaz_1",
		"Sitokinez_1",
		"Profaz_2",
		"Metafaz_2",
		"Anafaz_2",
		"Telofaz_2",
		"Sitokinez_2"
	]
}

const ModelViewer = React.forwardRef<any, any>((props, ref) => {
	//@ts-ignore
	return <model-viewer ref={ref} {...props}></model-viewer>;
});

function App(props: { mode: "Mitoz" | "Mayoz" }) {
	const [Index, setIndex] = useState(0);
	const viewerRef = useRef();

	useEffect(() => {
		(viewerRef.current as unknown as HTMLElement).ondblclick = () => {
			setIndex(Index + 1)
		}

		document.title = `${props.mode} Bölünme`
	})

	return (
		<div className="size-full flex flex-col *:w-full p-2 bg-black">
			<div className="flex justify-center *:w-1/4 gap-2">
				<button className="btn btn-square" onClick={() => setIndex(Index - 1)}>Önceki</button>
				<button className="btn btn-square" onClick={() => setIndex(Index + 1)}>Sonraki</button>
			</div>
			<div className="flex justify-center select-none my-4">
				{models[props.mode].at(Index % models[props.mode].length)?.split("_").join(" ")}
			</div>
			<ModelViewer
				src={`/BioP/models/${props.mode}/${models[props.mode].at(Index % models[props.mode].length)}.glb`}
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