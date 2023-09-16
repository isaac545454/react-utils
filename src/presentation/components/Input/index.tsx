import {Input as Text} from "./components/Element";
import { ErrrorInput as Error } from "./components/ErrorInput";
import { Labelnput as Label } from "./components/Labelnput";
import { Mask } from "./components/Mask";
import { Container } from "./components/ContainerInput";
import { ControllerSelect } from "./components/ControlletSelect";
import { ControllerSelectAsync } from "./components/ControllerSelectAsync";
import { Date } from "./components/DateInput";

export const Input = {
    //tipos de inputs
    Date,
    Text,
    Mask,
    ControllerSelect,
    ControllerSelectAsync,
    //tipos de titulos
    Label,
    //tipos de error
    Error,
    //tipos de container
    Container,
}