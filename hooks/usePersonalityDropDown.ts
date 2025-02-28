import {useAtom} from 'jotai';
import {isPersonalityVisibleAtom} from '../stores';

export default function usePersonalityDropDown() {
  const [isVisible, setIsVisible] = useAtom(isPersonalityVisibleAtom);

  const hidePersonalityDropDown = () => {
    setIsVisible(false);
  };

  const showPersonalityDropDown = () => {
    setIsVisible(true);
  };

  const togglePersonalityDropDown = () => {
    setIsVisible(!isVisible);
  };

  return {
    togglePersonalityDropDown,
    showPersonalityDropDown,
    hidePersonalityDropDown,
  };
}
