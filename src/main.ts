(async (FDU) => {
    if (!(await FDU.check())) {
        throw FDU.error();
    }

    console.log("Hello world!");
})(window.FDU);