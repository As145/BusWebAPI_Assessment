// Web API URL
let url_address = '/api/Buses';
let edit_status = false;

function displayAllBuses() {
    $.ajax({
        type: "GET",
        url: url_address,
        cache: false,
        success: function (data) {
            const tableBody = $("#table_details");
            $(tableBody).empty();
            if (data.length == 0) {
                const tr = $("<tr></tr>");
                tr.append('<td colspan="6" align="center">No Bus information</td>');
                tr.appendTo(tableBody);
            } else {
                $.each(data, function (key, item) {
                    const tr = $("<tr></tr>");
                    tr.append($("<td></td>").text(item.source));
                    tr.append($("<td></td>").text(item.destination));
                    tr.append($("<td></td>").text("$" + item.rate));
                    tr.append($("<td></td>").text(item.type));
                   
                    tr.append($("<td></td>").append('<button class="btn btn-secondary" data-toggle="modal" data-target="#add_edit_dialog">Edit Details</button>')
                        .on("click", function () {
                            getBusDetails(item.id);
                        })
                    );
                    tr.append($("<td></td>").append('<button class="btn btn-danger">Delete Details</button>')
                        .on("click", function () {
                            if (confirm("Are You Sure To Remove This Bus Details?")) {
                                deleteBusDetails(item.id);
                            }
                        })
                    );
                    
                    tr.appendTo(tableBody)
                });
            }
        }
    });
}

function saveBusDetails() {
    let source_value = $('#source').val();
    let destination_value = $('#destination').val();    
    let price_value = parseFloat($('#price').val());
    let type_value = $('#type').val();   

    let bus = {
        source: source_value,
        destination: destination_value,
        rate: price_value,
        type: type_value
    };

    if (edit_status) {
        let bus_id = parseInt($("#bus_id").val());
        bus["id"] = bus_id;
        $.ajax({
            type: "PUT",
            url: url_address + "/" + bus_id,
            data: JSON.stringify(bus),
            contentType: "application/json; charset=utf-8"
        }).done(function (response) {
            $("#output").html("Bus Details is Updated!!!");
            displayAllBuses();
        }).fail(function (xhr, status) {
            $("#output").html("Bus Details is not Updated!!!");
        });
    } else {
        $.ajax({
            type: "POST",
            url: url_address,
            data: JSON.stringify(bus),
            contentType: "application/json; charset=utf-8"
        }).done(function (response) {
            $("#output").html("Bus Details is Saved!!!");
            displayAllBuses();
        }).fail(function (xhr, status) {
            $("#output").html("Bus Details is not Saved!!!");
        });
    }
}

function resetForm() {
    $("#model_title").html("Add Bus Details");
    $('#bus_id').val("");
    $('#source').val("");
    $('#destination').val("");
    $('#price').val("");
    $('#type').val("Normal");
    $('#output').html("");
    edit_status = false;
}

function getBusDetails(id) {
    $.ajax({
        type: "GET",
        url: url_address + "/" + id,
        contentType: "application/json"
    }).done(function (bus) {
        $('#bus_id').val(bus.id);
        $('#source').val(bus.source);
        $('#destination').val(bus.destination);
        $('#price').val(bus.rate);
        $('#type').val(bus.type);
        $("#model_title").html("Edit Bus Details");
        edit_status = true;
    });
}

function deleteBusDetails(id) {
    $.ajax({
        type: "DELETE",
        url: url_address + "/" + id,
    }).done(function (response) {
        displayAllBuses();
    });
}