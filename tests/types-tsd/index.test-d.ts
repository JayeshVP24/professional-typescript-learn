import { ITeam} from "../../src/types"
import {expectNotAssignable, expectAssignable} from "tsd"

expectNotAssignable<ITeam>(null)    
expectNotAssignable<ITeam>({
    channels: [],
    iconUrl: "",
    id: "",
    name: ""
})
