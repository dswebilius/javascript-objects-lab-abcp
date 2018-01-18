var recipes = {}

function updateObjectWithKeyAndValue (obj, key, value) {
    return Object.assign({}, obj, { [key]:value});
}

function destructivelyDeleteFromObjectByKey (object, key) {
    return delete object.key;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromObjectByKey (object, key) {
    var newObj = Object.assign({}, object);
    delete newObj.key;
    return object;
}