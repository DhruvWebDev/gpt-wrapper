import { useParams } from 'next/navigation'
import axios from 'axios'
import { startDevEnvironment } from '@/utils/startDevEnv';
import { TabViewer } from '@/llm/tabView';
import { StepList } from '@/llm/stepList';
import { mountStructure } from '@/llm/fileMount';

export default function Builder() {
  const params = useParams<{ prompt: string; }>();

  const [codeFromLlm, setCodeFromLlm] = useState({});
  const [mountCode, setMountCode] = useState(false);
  const [scriptList, setScriptList] = useState(false);
  const [stepList, setStepList] = useState({});
  const [startDevEnv, setStartDevEnv] = useRecoilState(devEnvironment);

  //Fetching Code from llm  
  useEffect(() => {
    try {
      const code = axios.get(`/api/template?prompt=${params.prompt}`);
      setCodeFromLlm(code);
    } catch (error) {
      console.error('Error in fetching code:', error);
    }
  }, [params]);


  //Mounting Code
  useEffect(() => {
    try {
      const mountCode = mountStructure({ codeFromLlm });
      if (mountCode) {
        setMountCode(true);
      } else {
        setMountCode(false);
      }
    } catch (error) {
      console.error('Error in mounting code:', error);

    }

  }, [codeFromLlm]);

  //Start Dev Environment
  useEffect(() => {
    if (mountCode) {
      try {
        const startDevEnv = startDevEnvironment();
        if (startDevEnv) {
          setStartDevEnv(true);
        } else {
          setStartDevEnv(false);
        }
      } catch (error) {
        console.error('Error in starting dev environment:', error);
        setStartDevEnv(false);
      }
    }
  }, [mountCode])



    return (
      // The builder page that consist of steps, file explorer, code-editor, preview frame and terminal...

      <div>
              <StepList project={codeFromLlm} />
              <FileExplorer project={codeFromLlm} />
              <TabViewer  />
              <Terminal />
      </div>
    )

  } 
