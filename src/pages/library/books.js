import React from "react";

const  Books =({ data }) => {
    return(

        <div class="row">
        <div class="col-lg-3 col-md-4">
            <div  class="well hoverwell thumbnail" id="thumbnail">
                {data.map((item) => (
                    <h6 class="text-center">{item.data.title}</h6>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Books;