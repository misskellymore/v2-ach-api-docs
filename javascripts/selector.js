function updateSnippets(e){[".language-ruby",".language-python",".language-javascript",".language-java",".language-php",".language-raw"].forEach(function(t){t.indexOf(e)>-1?$(t).fadeIn(0):$(t).fadeOut(0)})}function updateBodySelectors(e){$(".selector_switch").toggleClass("active",!1),$(".selector_switch").each(function(t,n){$(n).toggleClass("active",n.id.indexOf(e)>-1)})}$(document).ready(function(){if(sessionStorage.getItem("current_language")){var e=sessionStorage.getItem("current_language");updateSnippets(e),$(".language_select").val(e),updateBodySelectors(e)}else $(".language_select").val("ruby"),updateSnippets("ruby"),sessionStorage.setItem("current_language","ruby"),updateBodySelectors("ruby");$(".language_select").change(function(){$(".language_select").val($(this).val()),sessionStorage.setItem("current_language",$(this).val()),updateSnippets($(this).val()),updateBodySelectors($(this).val())}),$(".selector_switch").click(function(e){updateSnippets(this.id),updateBodySelectors(this.id),$(".language_select").val(this.id),sessionStorage.setItem("current_language",$(".language_select :selected").val())})});