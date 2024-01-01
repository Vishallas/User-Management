
$("#add_user").submit((event) => {
    alert("User created.")
})

$("#update_user").submit((event) => {
    event.preventDefault();
    const unindexed_array = $(event.currentTarget).serializeArray();

    var data = {};
    $.map(unindexed_array, (n, i) => {
        if (n['name']) {
            data[n['name']] = n['value'];
        }
    });

    var req = {
        "url": `http://localhost:3000/api/user/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(req).done((res) => {
        alert("Data updated successfully!");
    });

});

if (window.location.pathname == '/') {
    $ondelete = $(".table tbody td a.delete");

    $ondelete.click(function () {
        var id = $(this).attr("data-id");
        var rid = 1 + Number($(this).attr("row-id"));
        var req = {
            "url": `http://localhost:3000/api/user/${id}`,
            "method": "DELETE"
        }
        if (confirm(`Are you confirm to delete ${rid}`)) {
            console.log("Delete");
            $.ajax(req).done((res) => {
                alert(`Id - ${rid} deleted successfully.`);
            });
        }
    })
}