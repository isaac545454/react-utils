import {Input as Text} from "./Element";
import { ErrrorInput as Error } from "./ErrorInput";
import { Labelnput as title } from "./Labelnput";
import { Mask } from "./Mask";
import { Container as Label } from "./ContainerInput";
import { ControllerSelect } from "./ControlletSelect";
import { ControllerSelectAsync } from "./ControllerSelectAsync";
import { Date } from "./DateInput";

export const Input = {
    //tipos de inputs
    Date,
    Text,
    Mask,
    ControllerSelect,
    ControllerSelectAsync,
    //tipos de titulos
    title,
    //tipos de error
    Error,
    //tipos de container
    Label,
}