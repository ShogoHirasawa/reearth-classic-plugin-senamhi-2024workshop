import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export default () => {
  // const inited = useRef(false);

  // useLayoutEffect(() => {
  //   if (!inited.current) {
  //     const { primaryColor } =
  //       (
  //         window as Window & {
  //           _reearth_plugin_extension_init_data_?: {
  //             primaryColor?: string;
  //           };
  //         }
  //       )._reearth_plugin_extension_init_data_ ?? {};

  //     if (primaryColor) {
  //       const hslColor = hexToHSL(primaryColor);
  //       if (hslColor) {
  //         document.documentElement.style.setProperty("--primary", hslColor);
  //       }
  //     }
  //     inited.current = true;
  //   }
  // }, []);

  // const handleFlyToTokyo = useCallback(() => {
  //   postMsg("flyToTokyo");
  // }, []);

  // const [mouseLocation, setMouseLocation] = useState<{
  //   lat: number | undefined;
  //   lng: number | undefined;
  //   height: number | undefined;
  // }>({
  //   lng: 0,
  //   lat: 0,
  //   height: 0,
  // });

  // const handleMouseMove = useCallback((e: MouseEvent) => {
  //   setMouseLocation({
  //     lng: e.lng,
  //     lat: e.lat,
  //     height: e.height,
  //   });
  // }, []);

  useEffect(() => {
    console.log("Listener added");
    window.addEventListener("message", e => {
      console.log("Message received", e.origin);
    });
  }, []);

  return {};
};
