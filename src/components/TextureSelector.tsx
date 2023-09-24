import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import * as images from "../assets/texture/texture";

function TextureSelector() {
    const [visible, setVisible] = useState(false);
    const [texture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture,
    ]);

    const { grass, dirt, glass, log, wood } = useKeyboard();

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log,
        };

        const selectedTexture = Object.entries(options).find(
            ([, isEnabled]) => isEnabled
        );

        if (selectedTexture) {
            const [textureName] = selectedTexture;
            setTexture(textureName);
        }
    }, [grass, dirt, glass, log, wood]);

    if (!visible) return null;

    return (
        <div className="texture-selector">
            {Object.entries(images).map(([imgKey, img]) => {
                const imgPath = img.source.data.src;

                return (
                    <img
                        className={
                            texture === imgKey.replace("Texture", "")
                                ? "selected"
                                : ""
                        }
                        key={imgKey}
                        src={imgPath}
                        alt={imgKey[1]}
                    />
                );
            })}
        </div>
    );
}

export default TextureSelector;
