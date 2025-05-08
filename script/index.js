import _ from "lodash";

function divComp() {
    var eleDiv = document.createElement("div");
    // TODO: use Lodash '_' to join string
    eleDiv.innerHTML = _.join(["Test", "Message"], ' ');
    // TODO: return element div
    return eleDiv;
}
// TODO: append div to body
document.getElementById("imported").appendChild(divComp());