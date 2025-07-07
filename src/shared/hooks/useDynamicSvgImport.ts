import { useEffect, useState } from "react";

const useDynamicSvgImport = (iconName: string) => {
  const [Svg, setSvg] = useState<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        const importedIcon = await import(
          `../../assets/icons/${iconName}.svg?react`
        );
        setSvg(() => importedIcon.default);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    importSvgIcon();
  }, [iconName]);
  return { error, loading, Svg };
};

export default useDynamicSvgImport;
