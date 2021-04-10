import { ComponentType, FunctionComponent } from "react";
import { ModalProps } from "react-native";
import { ImageSource } from "react-native-image-viewing/dist/@types";

export type ImageViewProps = {
  images: ImageSource[];
  imageIndex: number;
  visible: boolean;
  onRequestClose: () => void;
  onLongPress?: (image: ImageSource) => void;
  onImageIndexChange?: (imageIndex: number) => void;
  presentationStyle?: ModalProps["presentationStyle"];
  animationType?: ModalProps["animationType"];
  backgroundColor?: string;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  delayLongPress?: number;
  HeaderComponent?: ComponentType<{
    imageIndex: number;
  }>;
  FooterComponent?: ComponentType<{
    imageIndex: number;
  }>;
};

export const ImageView: FunctionComponent<ImageViewProps> = () => <></>;
