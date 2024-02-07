import {FDUModule} from "./types/FDU";
import FDU = FDUModule.FDU;

(async () => {
    if (!(await FDU.check())) {
        throw FDU.error();
    }

    console.log("Hello world!");
})();