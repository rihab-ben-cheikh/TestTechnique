import {useAtom} from 'jotai';
import {isMindSetVisibleAtom} from '../stores';

export default function useMindSetDropDown() {
  const [isVisible, setIsVisible] = useAtom(isMindSetVisibleAtom);

  const hideMindSetDropDown = () => {
    setIsVisible(false);
  };

  const showMindSetDropDown = () => {
    setIsVisible(true);
  };

  const toggleMindSetDropDown = () => {
    setIsVisible(!isVisible);
  };

  return {
    toggleMindSetDropDown,
    showMindSetDropDown,
    hideMindSetDropDown,
  };
}
