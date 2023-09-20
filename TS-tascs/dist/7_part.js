"use strict";
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["Loading"] = "Loading";
    LoadingStatus["Success"] = "Success";
    LoadingStatus["Error"] = "Error";
})(LoadingStatus || (LoadingStatus = {}));
function handleData(dataState) {
    if (dataState.status === LoadingStatus.Loading)
        return 'loading...';
    else if (dataState.status === LoadingStatus.Error)
        return dataState.error.message;
    else if (dataState.status === LoadingStatus.Success)
        return String(dataState.data);
    else
        return 'unknown';
}
const loading = { status: LoadingStatus.Loading };
console.log(handleData(loading));
const error = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error));
const success = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success));
function applyTransactions(wallet) {
    try {
        let { balance } = wallet;
        wallet.transactions.forEach((tr) => {
            balance = tr.apply(balance);
        });
        return balance;
    }
    catch (e) {
        return wallet.balance;
    }
}
const wallet = {
    transactions: [
        {
            apply: (amount) => amount * 4,
        },
    ],
    balance: 80
};
console.log(applyTransactions(wallet));
class CustomFile {
    constructor(obj) {
        this.name = obj.name;
        this.size = obj.size;
        this.isCopy = obj instanceof CustomFile;
    }
    toString() {
        return `${this.isCopy ? '(copy) ' : ""}${this.name} (${this.size} bytes)`;
    }
}
const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString());
const file2 = new CustomFile(file);
console.log(file2.toString());
const file3 = new CustomFile(file2);
console.log(file2.toString());
//# sourceMappingURL=7_part.js.map