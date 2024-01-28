import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms.js";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);

  return (
    <>
      <button>Home</button>
      <button>
        My network : {networkAtomCount > 100 ? "99" : networkAtomCount}
      </button>
      <button>Jobs : {jobsAtomCount}</button>
      <button>Messaging : {messagingAtomCount} </button>
      <button>Notification : {notificationAtomCount} </button>

      <ButtonUpdator />
    </>
  );
}

function ButtonUpdator() {
  const setNotificationAtomCount = useSetRecoilState(notificationAtom);
  return (
    <button
      onClick={() => {
        setNotificationAtomCount((c) => c + 1);
      }}
    >
      me
    </button>
  );
}

export default App;
