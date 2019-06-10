var orginalData =[
{id:1, parent:"Airtel", child:["Network", "Phone"]}
];


function crossover() {
    ///////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////CROSSOVER FUNCTIONALITY///////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    var Data = ['Yahoo', 'Tata'];

    populateItems(Data, '#items');

    //add btn
    $('#crossover-btn-add').click(function () {
        var selected = $('select#items').val();
        $('#items option:selected').remove();
        generateOptionElements(selected, '#selected');
        console.log(selected, "Add");
        addItemsToPanel2(selected);
    });

    //remove btn
    $('#crossover-btn-remove').click(function () {
        var selected = $('select#selected').val();
        console.log(selected, "Remove");
        removeItemsFromPanel2(selected);


        $('#selected option:selected').remove();
        $('#items option').each(function () {
            selected.push($(this).val());
        });

        $('#items option').remove();
        selected.sort();

        generateOptionElements(selected, '#items');

    });

    //add all btn
    $('#crossover-btn-add-all').click(function () {
        var selected = [];
        $('#items option').each(function () {
            selected.push($(this).val());
        });

        $('#items option').remove();

        generateOptionElements(selected, '#selected');
        console.log(selected, "Add All")
    });

    //remove all btn
    $('#crossover-btn-remove-all').click(function () {
        var selected = [];
        $('#items option').each(function () {
            selected.push($(this).val());
        });

        $('#selected option').each(function () {
            selected.push($(this).val());
        });
        console.log(selected, "Remove All")
        $('#items option').remove();
        $('#selected option').remove();
        selected.sort();

        generateOptionElements(selected, '#items');

    });

    //populate items box with arr

    //temporarily add a new item to the crossover
    $('#add-new-item-btn').click(function () {
        //   if ($('#new-item-input').val() !== '') {
        var selected = ["Apple", "Orange"];
        //   selected.push($('#new-item-input').val().trim());

        $('#items option').each(function () {
            selected.push($(this).val());
        });

        //    selected.sort();
        $('#items').empty();

        generateOptionElements(selected, '#items');

        //     $('#new-item-input').val('');
        // }
    });

    //reset demo
    $('#reset-btn').click(function () {
        $('#items').empty();
        $('#selected').empty();
        populateItems(Data, '#items');
    });


    ///////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////MINI FUNCTIONS TO AVOID REPEAT CODE///////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////









    /**Panel 2  Begin*/

    var Data2 = ['Wells', 'Bofa'];

    populateItems(Data2, '#items2');

    //add btn2
    $('#crossover-btn-add2').click(function () {
        var selected = $('select#items2').val();
        $('#items2 option:selected').remove();
        generateOptionElements(selected, '#selected2');
        console.log(selected, "Add2");
    });

    //remove btn2
    $('#crossover-btn-remove2').click(function () {
        var selected = $('select#selected2').val();
        console.log(selected, "Remove2");

        $('#selected2 option:selected').remove();
        $('#items2 option').each(function () {
            selected.push($(this).val());
        });

        $('#items2 option').remove();
        selected.sort();

        generateOptionElements(selected, '#items2');

    });


    function addItemsToPanel2(selected2) {
        console.log(selected2, "Selected Item in Panel 1");
        var selected = [];
        for (var i = 0; i < selected2.length; i++) {
            if (selected2 == "Tata") {
                selected.push("Tata Motors Unit");
            } else {
                // Yahoo
                selected.push("YMail");
            }
        }

        $('#items2 option').each(function () {
            selected.push($(this).val());
        });
        $('#items2').empty();

        generateOptionElements(selected, '#items2');

    }

function removeItemsFromPanel2(removeSelected){
    var selected = removeSelected;// $('select#items2').val();
    console.log(selected, "Auto Remove2");
var afterRemove=[];
var afterRemoveSelected=[];
    for(var i=0;i<selected.length;i++){
        if(selected[i]="Tata"){

            $('#items2').find('option').each(function(){
                console.log($(this).val());
                if($(this).val()=="Tata Motors Unit"){
                    $(this).remove();
                  //  $('#items2 option').remove();
                }else{
                    afterRemove.push($(this).val());
                }
                }
                
                )

                $('#selected2').find('option').each(function(){
                    console.log($(this).val());
                    if($(this).val()=="Tata Motors Unit"){
                        $(this).remove();
                      //  $('#items2 option').remove();
                    }else{
                        afterRemoveSelected.push($(this).val());
                    }
                    }
                    
                    )




        }
    }
   $('#items2').empty();
   $("#selected2").empty();
   console.log(afterRemove, afterRemoveSelected, "after Remove")


    generateOptionElements(afterRemove, '#items2');
    generateOptionElements(afterRemoveSelected, '#selected2');
}


    /**Panel 2 End */























    function populateItems(arr, targetMultiSelect) {
        arr.sort();
        generateOptionElements(arr, targetMultiSelect);
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////MINI FUNCTIONS TO AVOID REPEAT CODE///////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    //create option elements
    function generateOptionElements(arr, targetMultiSelect) {
        for (var i = 0; i < arr.length; i++) {
            var option = document.createElement('OPTION');
            var text = document.createTextNode(arr[i]);
            option.appendChild(text);
            $(targetMultiSelect).append(option);
            //   console.log(text,"generateOptionElements" );
        }
    }
};