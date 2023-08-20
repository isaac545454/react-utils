import { Dispatch, SetStateAction, useMemo } from "react";

interface Props {
  children: JSX.Element;
  showModal: boolean;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
}

export const Container: React.FC<Props> = ({ children, showModal }) => {
  const containerComponent = useMemo(() => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
        <div className="bg-white  rounded-3xl pb-4 px-2 relative shadow-md">
          <div className="">{children}</div>
        </div>
      </div>
    );
  }, [children, showModal]);

  return containerComponent;
};
