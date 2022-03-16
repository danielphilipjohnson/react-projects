// Loading Spinner
export default function Loader({ show }) {
	return show ? <div className="border-b-slate-300 border-l-slate-300 border-r-slate-300 border-8 rounded-3xl w-12 h-12 border-t-emerald-300 animate-spin"></div> : null;
}