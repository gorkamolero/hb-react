import sanitizeHtml from "sanitize-html";

class Utils {
  haveSameElements(l1, l2) {
    if (l1.length !== l2.length) return false;

    for (let el of l2) {
      if (l1.indexOf(el) === -1) return false;
    }

    return true;
  }

  isEmpty(obj) {
    if (obj === null) {
      return true;
    } else if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === "object") {
      return Object.keys(obj).length === 0;
    } else if (typeof obj === "string") {
      return obj === "";
    } else {
      throw new Error("Invalid object");
    }
  }

  waitForEngine = function (callback) {
    let waited = 0;
    let timeout = 3;

    let Engine = window.pickzen.Engine;

    if (Engine) {
      callback(Engine.default || Engine);
    } else {
      function wait(interval) {
        setTimeout(function () {
          waited += interval;

          Engine = window.pickzen.Engine;
          if (Engine && Engine.default) {
            // Modulo Engine cargado por webpack
            Engine = Engine.default;
          }
          if (Engine !== undefined) {
            callback(Engine);
          } else if (waited >= timeout * 1000) {
            callback(null);
          } else {
            wait(interval * 2);
          }
        }, interval);
      }

      wait(30);
    }
  };

  stripHtml = (dirty) =>
    sanitizeHtml(dirty, {
      allowedTags: ["b", "i", "em", "strong", "a", "br", "span"],
      allowedAttributes: {
        a: ["href"],
      },
      allowedIframeHostnames: ["www.youtube.com"],
    });

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  embedCSS(css) {
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  embedJSLibs(libs) {
    libs.forEach(lib => {
      let tag = document.createElement('script');
      tag.setAttribute('src',lib);
      document.head.appendChild(tag);
    });
  }

}

export default new Utils()