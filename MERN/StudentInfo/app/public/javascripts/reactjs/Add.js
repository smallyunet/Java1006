import React from 'react';
import ReactDOM from 'react-dom';



/**
 * 添加按钮
 */
function AddButton () {
    return (
        <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddButton;