"use client";

import OrangeButton from "@/components/OrangeButton";
import useRequestModal from "@/hooks/useRequestModal";

const ShowButtonPrice = () => {
    const { onOpen, setDefaultValue } = useRequestModal();

    const showPrice = () => {
        setDefaultValue("ptice");
        onOpen();
        document.body.style.overflowY = "hidden";
    };

    return (
        <div className="w-full" onClick={showPrice}>
            <OrangeButton className="w-full" label={"Оставить заявку"} />
        </div>
    );
};

export default ShowButtonPrice;
