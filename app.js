$(document).ready(function(){
    
        // GET DATA FROM API
        $.ajax({url: "//api.fixer.io/latest",datatype: "json", success: function(result){

            var rates = result['rates'];

            var body = "";
            	body += '<div class="form-group"><label>From</label>';
				body += '<select class="form-control" name="from">';
				body += '<option>'+result['base']+'</option>';
				body += '</select></div>';
			    body += '<div class="form-group"><label>To</label>';
			    body += '<select id="convertedval" class="form-control" name="to">';
			    // GETTING VALUE
			    $.each(rates, function(key, value) {
  					body += '<option value="'+value+'">'+key+'</option>';
				});
				
			    body += "</select></div>";

			 $(".curency-fields").html(body);

        }});

        // INPUT FUNCTION
        $("#inpcur").keyup(function() {

				var inputVal = $(this).val();//$("#inpcur").val();
				var setCur = $("#convertedval").val();
				var result = setCur * inputVal;
				$("#convertCur").val(result);
		});

        // ON CHANGE FUNCTION
        $(document.body).on('change',"#convertedval",function (e) {
		   		
		   		var setCur = $(this).val();
				var inputVal = $("#inpcur").val();
				var result = setCur * inputVal;
				$("#convertCur").val(result);
		});

	});