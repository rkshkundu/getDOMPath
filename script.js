
 

<!DOCTYPE html>
<html>
<body>

 

 

 

<iframe src="https://www.w3schools.com" id="demo">
</iframe>

 

 

 

<script>
window.onload = function() {
    
   function getTarget(e) {
        if (e.target) {
          return e.target;
        } else if (("e.srcElement", e.srcElement)) {
          return e.srcElement;
        }
      };

 


function getSelectorsOfElem(el) {
      var selectors = "";
      if (el.id) {
        selectors += "#" + el.id;
      }
      if (el.className) {
        var splittedClasses = el.className.split(" ");
        for (var i = 0; i < splittedClasses.length; i++) {
          if (splittedClasses[i] !== "") {
            selectors += "." + splittedClasses[i];
          }
        }
      }
      return selectors;
    };

 

 

 

 

 

  function getXpathWithSelectors(el) {
      if (typeof el == "string") {
        return document.evaluate(el, document, null, 0, null);
      }

 

 

 

      if (!el || el.nodeType != 1) {
        return "";
      }

 

 

 

      if (el.id) {
        return el.tagName.toLowerCase() + "#" + el.id;
      }

 

 

 

      var sames = [].filter.call(el.parentNode.children, function(x) {
        return x.tagName == el.tagName;
      });

 

 

 

      var selectors = getSelectorsOfElem(el);

 

 

 

      if (!selectors) {
        selectors = ":nth-child(" + ([].indexOf.call(sames, el) + 1) + ")";
      }

 

 

 

      return (
        getXpathWithSelectors(el.parentNode) +
        ">" +
        el.tagName.toLowerCase() +
        selectors
      );
    };

 

 

 

 

 

    var temp = document.getElementById("demo");
    temp.contentWindow.document.onclick = function() {

 

 console.log('abc');

 

    let target=getTarget(event);
console.log("getXpathWithSelectors",getXpathWithSelectors(target));

 

 

 

        
    };
};
</script>

 

 

 

</body>
</html>
