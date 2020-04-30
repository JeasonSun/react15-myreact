class Unit{
    constructor(element){
        // 私有属性
        this._currentElement = element;
    }

    getMarkUp(){
        throw Error('基类：此方法不能直接被调用')
    }
}

class TextUnit extends Unit {
    getMarkUp(reactid){
        this._reactid = reactid;
        return `<span data-reactid="${reactid}">${this._currentElement}</span>`
    }
}

function createUnit(element){
    if(typeof element === 'string' || typeof element === 'number'){
        return new TextUnit(element);
    }
}

export {
    createUnit
}

