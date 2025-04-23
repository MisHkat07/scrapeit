function e(e, t, n, o, r, a, i) {
  var s = {},
    c = null,
    l = !1,
    d = !1,
    f = {
      urls: ["<all_urls>"],
      tabId: n,
      types: [
        "main_frame",
        "sub_frame",
        "stylesheet",
        "script",
        "font",
        "object",
        "xmlhttprequest",
        "other",
      ],
    };
  function u() {
    !l &&
      d &&
      (
        i ||
        function (e) {
          e(!0);
        }
      )(function (e) {
        if (!e) return g();
        l ||
          ((l = !0),
          // @ts-ignore
          chrome.webRequest.onBeforeRequest.removeListener(p),
          // @ts-ignore
          chrome.webRequest.onCompleted.removeListener(h),
          // @ts-ignore
          chrome.webRequest.onErrorOccurred.removeListener(h),
          t());
      });
  }
  function p(e) {
    (s[e.requestId] = 1), (c = new Date());
  }
  function h(e) {
    c && (delete s[e.requestId], Object.keys(s).length || g());
  }
  function g() {
    setTimeout(function () {
      // @ts-ignore
      new Date() - c < r || Object.keys(s).length || u();
    }, r);
  }
  // @ts-ignore
  chrome.webRequest.onBeforeRequest.addListener(p, f),
    // @ts-ignore
    chrome.webRequest.onCompleted.addListener(h, f),
    // @ts-ignore
    chrome.webRequest.onErrorOccurred.addListener(h, f),
    (
      e ||
      function (e) {
        e();
      }
    )(function () {
      setTimeout(u, o),
        setTimeout(function () {
          (d = !0), g();
        }, a);
    });
}
function t(e, t) {
  return (
    // @ts-ignore
    t && (e += 1462), (Date.parse(e) - new Date(Date.UTC(1899, 11, 30))) / 864e5
  );
}
// @ts-ignore
function n(e, n) {
  for (
    var o = {}, r = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } }, a = 0;
    a != e.length;
    ++a
  )
    for (var i = 0; i != e[a].length; ++i) {
      r.s.r > a && (r.s.r = a),
        r.s.c > i && (r.s.c = i),
        r.e.r < a && (r.e.r = a),
        r.e.c < i && (r.e.c = i);
      var s = { v: e[a][i] };
      if (null !== s.v) {
        // @ts-ignore
        var c = XLSX.utils.encode_cell({ c: i, r: a });
        "number" == typeof s.v
          ? (s.t = "n")
          : "boolean" == typeof s.v
          ? (s.t = "b")
          : s.v instanceof Date
          ? // @ts-ignore
            ((s.t = "n"), (s.z = XLSX.SSF._table[14]), (s.v = t(s.v)))
          : (s.t = "s"),
          (o[c] = s);
      }
    }
  // @ts-ignore
  return r.s.c < 1e7 && (o["!ref"] = XLSX.utils.encode_range(r)), o;
}
function o(e, t) {
  e.data.unshift(e.fields);
  var o = new (function e() {
      if (!(this instanceof e)) return new e();
      (this.SheetNames = []), (this.Sheets = {});
    })(),
    r = n(e.data);
  return (
    // @ts-ignore
    o.SheetNames.push(t), (o.Sheets[t] = r), XLSX.write(o, { type: "binary" })
  );
}
function r(e) {
  try {
    e();
  } catch (e) {
    console.log("Error: ", e);
  }
}
import a from "./js/google-analytics.js";
var i = { id: parseInt(u("tabid")), url: u("url") },
  s = {},
  c = 1e3,
  l = null;
async function d() {
  null !== i.url.toLowerCase().match(/\/\/[a-z]+\.linkedin\.com/)
    ? // @ts-ignore
      ($("#waitHeader").hide(), p("", "noResponseErr", !1, !0))
    : (I(),
      setTimeout(function () {
        // @ts-ignore
        console.log("no response"), $("#waitHeader").is(":visible") && y(!0);
      }, 5e4),
      // @ts-ignore
      $(window).resize(function () {
        v();
      }),
      R());
}
function f(e, t) {
  return (t || ".") + e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&");
}
function u(e) {
  for (
    var t = window.location.search.substring(1).split("&"), n = 0;
    n < t.length;
    n++
  ) {
    var o = t[n].split("=");
    if (decodeURIComponent(o[0]) == e) return decodeURIComponent(o[1]);
  }
}
function p(e, t, n, o) {
  // @ts-ignore
  if ("" === e) return $("#" + t).hide();
  // @ts-ignore
  $("#" + t)
    .show()
    .text(e),
    n && L(e),
    o && a.fireEvent("Error", { url: s.startingUrl || i.url, msg: e });
}
function h(e) {
  var t = e.length,
    n = { "": 1 / 0 },
    o = {},
    r = {},
    a = {},
    i = {};
  function c(e) {
    // @ts-ignore
    return e in n ? n[e] : ((n[e] = $(f(e)).length), n[e]);
  }
  e.forEach(function (e) {
    for (var t in e) t in o || (o[t] = 0), o[t]++;
  }),
    Object.keys(o)
      .map(function (e) {
        return [o[e], e];
      })
      .forEach(function ([n, o]) {
        var s = "",
          l = 1 / 0;
        o.split(" ")[0]
          .split("/")
          .slice(1)
          .reverse()
          .forEach(function (e) {
            e.split(".")
              .slice(1)
              .forEach(function (e) {
                l < 2 * t || c(e) >= l || ((s = e), (l = c(e)));
              });
          });
        var d = o.split(" ")[1],
          f = 0,
          u = e.map(function (e) {
            return o in e;
          });
        d && isNaN(d) && (s += " " + d),
          s in r
            ? (r[s].forEach(function (e, t) {
                if (!f) {
                  var n = !0;
                  e.forEach(function (e, t) {
                    // @ts-ignore
                    n &= !(u[t] && e);
                  }),
                    n && (f = t + 1);
                }
              }),
              f
                ? (r[s][f - 1] = r[s][f - 1].map(function (e, t) {
                    return u[t] || e;
                  }))
                : (r[s].push(u), (f = r[s].length)),
              f > 1 && (s += " " + f))
            : (r[s] = [u]),
          s in a || (a[s] = []),
          a[s].push(o),
          s in i || (i[s] = 0),
          (i[s] += n);
      });
  var l = {},
    d = {
      fields: (r = Object.keys(a).filter(function (n) {
        var o = {},
          r = [];
        return (
          !(n in s.config.deletedFields) &&
          (e.map(function (e) {
            for (var t, i = 0; i < a[n].length; i++)
              a[n][i] in e && ((t = e[a[n][i]]) in o || (o[t] = 0), o[t]++);
            r.push(t);
          }),
          Object.keys(o).length && o[Object.keys(o)[0]] == t
            ? // @ts-ignore
              (0, !1)
            : // @ts-ignore
            (r = JSON.stringify(r)) in l
            ? // @ts-ignore
              (0, !1)
            : // @ts-ignore
              ((l[r] = 1), !(i[n] < 0.2 * t) || (0, !1)))
        );
      })),
      data: e.map(function (e) {
        return r.map(function (t) {
          for (var n = 0; n < a[t].length; n++)
            if (a[t][n] in e) return e[a[t][n]];
          return "";
        });
      }),
    };
  return (s.names = r), (s.namePaths = a), d;
}
function g(e) {
  return e.map(function (e) {
    return e in s.config.headers ? s.config.headers[e] : e;
  });
}
function w(e) {
  var t = h(e);
  return (t.fields = g(t.fields)), t;
}
function m(e) {
  for (
    var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0;
    o != e.length;
    ++o
  )
    n[o] = 255 & e.charCodeAt(o);
  return t;
}
function b() {
  a.fireEvent("Download", {
    hostName: s.hostName,
    startingUrl: s.startingUrl,
    dataLength: s.data.length,
  }),
    (() => {
      let e = (e) => {
          let t = {};
          for (let n = 0; n < 4; n++)
            void 0 !== e[n]
              ? (t[`selector${n}`] = e[n])
              : (t[`selector${n}`] = "");
          return t;
        },
        t = Object.keys(s.config.headers).length;
      t &&
        j(!0).then((n) => {
          // @ts-ignore
          let [o, r] = n;
          // @ts-ignore
          const i = (e) => r.find((t) => t.field_id === e);
          let c = {
            tableId: s.tableId,
            hostName: s.hostName,
            startingUrl: s.startingUrl,
          };
          if (t)
            // @ts-ignore
            for (name in s.config.headers) {
              // @ts-ignore
              let t = i(s.config.headers[name])
                  .selector.split(",")
                  .map((e) => e.slice(-100)),
                n = Object.assign(e(t), c, {
                  originalName: name,
                  // @ts-ignore
                  newName: s.config.headers[name],
                });
              a.fireEvent("RenameColumn", n);
            }
        });
    })();
}
function v() {
  var e = h(s.data);
  e.data = e.data.slice(0, c);
  s.previewLength = e.data.length;

  // @ts-ignore
  var t = $(".wtHolder").scrollTop();
  // @ts-ignore
  var n = $(".wtHolder").scrollLeft();
  var o = false;

  // @ts-ignore
  $("#hot").empty();
  // @ts-ignore
  new Handsontable($("#hot").get(0), {
    data: e.data,
    colHeaders: g(e.fields),
    wordWrap: false,
    manualColumnResize: true,
    // @ts-ignore
    width: $(window).width() - 20,
    // @ts-ignore
    height: $(window).height() - $("#hot").get(0).getBoundingClientRect().y,
    afterRender: function () {
      if (!o) {
        o = true;
        // @ts-ignore
        $(".wtHolder").scrollTop(t);
        // @ts-ignore
        $(".wtHolder").scrollLeft(n);
      }
    },
    // @ts-ignore
    modifyColWidth: function (e, t) {
      if (e > 300) return 300;
    },
    afterGetColHeader: function (t, n) {
      if (t !== -1) {
        // @ts-ignore
        if ($(n).children().length > 1) {
          // @ts-ignore
          $(".hot-header", n).remove();
        } else {
          // @ts-ignore
          $(n).click(function () {
            var e = this;
            setTimeout(function () {
              // @ts-ignore
              $(".header-input", e).trigger("focus");
            }, 20);
          });
        }

        // @ts-ignore
        var o = $("<div>", { class: "hot-header" });
        // @ts-ignore
        var r = $("<div>", { class: "header-input", contenteditable: "true" });

        if (s.config.headers[e.fields[t]]) {
          r.text(s.config.headers[e.fields[t]]);
        } else {
          r.text(n.firstChild.textContent);
        }

        // @ts-ignore
        $(n).append(o);
        o.append(r);
        o.append(
          // @ts-ignore
          $("<span>", {
            class: "glyphicon glyphicon-remove-circle remove-column",
            style: "padding-top: 2.5px",
          }).click(function () {
            s.config.deletedFields[e.fields[t]] = true;
            S();
            // @ts-ignore
            $("#resetColumns").show();
            v();
          })
        );

        r.get(0).addEventListener("input", function () {
          s.config.headers[e.fields[t]] = r.text();
          S();
        });

        n.firstChild.style.display = "none";
      }
    },
    // @ts-ignore
    beforeOnCellMouseDown: function (e, t, n) {
      if (t.row < 0) e.stopImmediatePropagation();
    },
  });
}
function S() {
  localStorage.setItem(s.configName, JSON.stringify(s.config));
}
// @ts-ignore
function y(e) {
  // @ts-ignore
  $("#waitHeader").hide(),
    p(
      "Doesn't support data extraction from this site yet.",
      "noResponseErr",
      !1,
      !0
    );
}
function k() {
  return localStorage.getItem("nextSelector:" + s.hostName);
}
function x(e, t) {
  if (!e)
    return i.reloaded
      ? y()
      : ((i.reloaded = !0),
        // @ts-ignore
        chrome.tabs.reload(i.id, {}, function () {
          // @ts-ignore
          chrome.tabs.onUpdated.addListener(function e(t, n) {
            "complete" === n.status &&
              t === i.id &&
              // @ts-ignore
              (chrome.tabs.onUpdated.removeListener(e), R());
          });
        }));
  (s.tableId = e.tableId),
    (s.scraping = !1),
    (s.failedToProcess = !1),
    (s.processingError = null),
    (s.tableSelector = e.tableSelector),
    (s.startingUrl = e.href),
    (s.hostName = e.hostname),
    (s.previewLength = 0),
    (s.configName = e.hostname + "-config"),
    (s.config = JSON.parse(localStorage.getItem(s.configName)) || {
      headers: {},
      deletedFields: {},
      crawlDelay: 1e3,
      maxWait: 2e4,
    }),
    r(
      t
        ? () => a.firePageViewEvent(s.hostName, s.startingUrl)
        : () =>
            a.fireEvent("AnotherTable", {
              hostName: s.hostName,
              startingUrl: s.startingUrl,
            })
    ),
    // @ts-ignore
    Object.keys(s.config.deletedFields).length && $("#resetColumns").show();
  var n = N(i.url);
  // @ts-ignore
  $("#wrongTable").show(),
    s.config.infinateScrollChecked &&
      // @ts-ignore
      ($("#nextButton").hide(),
      // @ts-ignore
      $("#startScraping").show(),
      // @ts-ignore
      $("#infinateScroll").prop("checked", !0)),
    // @ts-ignore
    chrome.tabs.sendMessage(i.id, { action: "getTableData" }, function (e) {
      e && e.error
        ? p("Something went wrong!", "noResponseErr", !0)
        : e.tableId == s.tableId &&
          (e.failedToProcess
            ? (p(
                "Failed to process rows on server. Showing raw data instead.",
                "error",
                !1
              ),
              (s.failedToProcess = !0),
              (s.processingError = e.processingError))
            : // @ts-ignore
              ($("#error").hide(), (s.failedToProcess = !1)),
          // @ts-ignore
          s.pages || s.config.infinateScrollChecked || $("#nextButton").show(),
          s.pages ||
            ((s.nextSelector = k()),
            s.nextSelector &&
              // @ts-ignore
              chrome.tabs.sendMessage(
                i.id,
                { action: "markNextButton", selector: s.nextSelector },
                function (e) {
                  // @ts-ignore
                  e.error || $("#startScraping").show();
                }
              )),
          // @ts-ignore
          $("#wait").hide(),
          // @ts-ignore
          $("#content").show(),
          (s.data = e.data),
          (s.pages = 1),
          (s.lastRows = e.data.length),
          (s.tableSelector = e.tableSelector),
          (s.goodClasses = e.goodClasses),
          (s.workingTime = 0),
          q(),
          // @ts-ignore
          $(".download-button").show(),
          v(),
          // @ts-ignore
          $("#csv")
            .off("click")
            .click(function () {
              console.log("Downloading CSV..."), r(b), P({ download: !0 });

              let e = w(s.data);

              // Map class names to proper names
              e.fields = mapClassNamesToProperNames(e.fields);

              // Filter out empty columns
              e.data = filterEmptyColumns(e.data);

              e.data.forEach((t, n) => {
                t.forEach((t, o) => {
                  Array.isArray(t) &&
                    (e.data[n][o] = Papa.unparse([t], {
                      quotes: !0,
                      escapeChar: '"',
                    }));
                });
              });

              saveAs(
                new Blob([Papa.unparse(e, { quotes: !0, escapeChar: '"' })], {
                  type: "application/octet-stream",
                }),
                N(i.url) + ".csv"
              );
            }),
          // @ts-ignore
          $("#xlsx")
            .off("click")
            .click(function () {
              r(b),
                P({ download: !0 }),
                saveAs(
                  new Blob([m(o(w(s.data), i.url.substring(0, 100)))], {
                    type: "application/octet-stream",
                  }),
                  n + ".xlsx"
                );
            }),
          // @ts-ignore
          $("#copy")
            .off("click")
            .click(function () {
              r(b),
                P({ download: !0 }),
                // @ts-ignore
                E(Papa.unparse(w(s.data), { delimiter: "\t" }));
            }));
    });
}
function N(e) {
  var t = new URL(e).hostname.split(".");
  return t[0].indexOf("www") > -1 ? t[1] : t[0];
}
function E(e) {
  var t = function (t) {
    t.preventDefault(),
      t.clipboardData
        ? t.clipboardData.setData("text/plain", e)
        : // @ts-ignore
          window.clipboardData && window.clipboardData.setData("Text", e);
  };
  window.addEventListener("copy", t),
    document.execCommand("copy"),
    window.removeEventListener("copy", t);
}
function R() {
  // @ts-ignore
  chrome.tabs.sendMessage(
    i.id,
    { action: "findTables", robots: l },
    function (e) {
      x(e, !0);
    }
  );
}
function C() {
  // @ts-ignore
  return $("#infinateScroll").is(":checked");
}
function D(e) {
  s.data = s.data.concat(e);
  var t = new Set();
  s.data.forEach((e) => t.add(JSON.stringify(e))),
    (s.data = Array.from(t, (e) => JSON.parse(e)));
}
function T() {
  (s.gettingNext = !1),
    (s.scraping = !0),
    // @ts-ignore
    $("#startScraping").hide(),
    // @ts-ignore
    $("#stopScraping").show(),
    p("", "error"),
    p('Please wait for more pages or press "Stop crawling".', "instructions"),
    // @ts-ignore
    C() && $("#infinateScrollElement").hide();
  var t = new Date();
  // @ts-ignore
  !(function n() {
    const o = function (e) {
      let t = { action: "scrollDown", selector: s.tableSelector };
      // @ts-ignore
      chrome.tabs.sendMessage(i.id, t, function (t) {
        if (t && t.error)
          return p("", "instructions"), p(t.error, t.errorId || "error", !0);
        // @ts-ignore
        $("#wrongTable").hide(), e();
      });
    };
    var r = function (e) {
      // @ts-ignore
      chrome.tabs.sendMessage(
        i.id,
        { action: "clickNext", selector: s.nextSelector },
        function (t) {
          if (t && t.error)
            return p("", "instructions"), p(t.error, t.errorId, !0);
          // @ts-ignore
          $("#wrongTable").hide(), e();
        }
      );
    };
    C() && (r = o),
      e(
        r,
        function () {
          // @ts-ignore
          chrome.tabs.sendMessage(
            i.id,
            { action: "getTableData", selector: s.tableSelector },
            function (e) {
              if (e) {
                if (e.error)
                  return (
                    p("", "instructions"), p(e.error, e.errorId || "error", !0)
                  );
                e.failedToProcess
                  ? (p(
                      "Failed to process rows. Showing raw data instead.",
                      "error",
                      !1
                    ),
                    (s.failedToProcess = !0),
                    (s.processingError = e.processingError))
                  : // @ts-ignore
                    ($("#error").hide(), (s.failedToProcess = !1)),
                  (s.lastRows = e.data.length),
                  s.pages++,
                  // @ts-ignore
                  (s.workingTime += new Date() - t),
                  (t = new Date()),
                  D(e.data),
                  q(),
                  s.previewLength < c
                    ? v()
                    : p("Preview limited to 1000 rows.", "previewLimit"),
                  s.scraping && n();
              }
            }
          );
        },
        i.id,
        s.config.maxWait,
        100,
        s.config.crawlDelay,
        function (e) {
          // @ts-ignore
          chrome.tabs.sendMessage(i.id, {}, function (t) {
            e(void 0 !== t);
          });
        }
      );
  })();
}
function I() {
  // @ts-ignore
  $("#stopScraping").click(L),
    // @ts-ignore
    $("#crawlDelay").bind(
      "propertychange change click keyup input paste",
      function () {
        // @ts-ignore
        var e = $(this).val();
        // @ts-ignore
        if (isNaN(e) || e < 0 || parseInt(1e3 * e) >= s.config.maxWait)
          return p("Bad min waiting value", "inputError");
        // @ts-ignore
        p("", "inputError"), (s.config.crawlDelay = parseInt(1e3 * e)), S();
      }
    ),
    // @ts-ignore
    $("#maxWait").bind(
      "propertychange change click keyup input paste",
      function () {
        // @ts-ignore
        var e = $(this).val();
        // @ts-ignore
        if (isNaN(e) || parseInt(1e3 * e) <= s.config.crawlDelay)
          return p("Bad max waiting value", "inputError");
        // @ts-ignore
        p("", "inputError"), (s.config.maxWait = parseInt(1e3 * e)), S();
      }
    ),
    // @ts-ignore
    $("#resetColumns").click(function () {
      // @ts-ignore
      (s.config.deletedFields = {}), S(), $("#resetColumns").hide(), v();
    }),
    // @ts-ignore
    $("#infinateScroll").click(function (e) {
      s.config.infinateScrollChecked
        ? ((s.config.infinateScrollChecked = !1),
          // @ts-ignore
          $("#nextButton").show(),
          // @ts-ignore
          k() ? $("#startScraping").show() : $("#startScraping").hide())
        : ((s.config.infinateScrollChecked = !0),
          // @ts-ignore
          $("#nextButton").hide(),
          // @ts-ignore
          $("#startScraping").show()),
        S();
    });
}
// @ts-ignore
function L(e = null) {
  (s.scraping = !1),
    console.log("Scraping stopped."),
    // @ts-ignore
    $("#startScraping").show(),
    // @ts-ignore
    $("#stopScraping").hide(),
    p(
      "Crawling stopped. Please download data or continue crawling.",
      "instructions"
    );
}
function O() {
  // @ts-ignore
  $("#pleaseRate").show(),
    // @ts-ignore
    $("#rateLater")
      .show()
      .click(function () {
        P({ rate: "later" }),
          // @ts-ignore
          $("#pleaseRate").hide(),
          r(() => a.fireEvent("Click", { button: "Rate later" }));
      }),
    // @ts-ignore
    $("#rate")
      .show()
      .click(function () {
        P({ rate: "now" }),
          // @ts-ignore
          $("#pleaseRate").hide(),
          r(() => a.fireEvent("Click", { button: "Rate now" })),
          // @ts-ignore
          chrome.tabs.create({
            url: "",
          });
      });
}
function P(e) {
  var t = JSON.parse(localStorage.getItem("stats")) || {
    pages: 0,
    rows: 0,
    downloads: 0,
    tabs: 0,
    lastRateRequest: null,
    lastDownloads: 0,
    lastRows: 0,
    rated: !1,
  };
  e.download
    ? t.downloads++
    : e.rate
    ? ("later" == e.rate &&
        ((t.lastRateRequest = new Date().getTime()),
        (t.lastDownloads = t.downloads),
        (t.lastRows = t.rows)),
      "now" == e.rate && (t.rated = !0))
    : (1 == s.pages && t.tabs++, t.pages++, (t.rows += s.lastRows)),
    !t.rated &&
      new Date().getTime() - t.lastRateRequest > 52704e5 &&
      t.downloads - t.lastDownloads > 9 &&
      t.rows - t.lastRows > 999 &&
      O(),
    localStorage.setItem("stats", JSON.stringify(t));
}
function q() {
  // @ts-ignore
  $("#stats")
    .empty()
    // @ts-ignore
    .append($("<div>", { text: "Pages scraped: " + s.pages }))
    // @ts-ignore
    .append($("<div>", { text: "Rows collected: " + s.data.length }))
    // @ts-ignore
    .append($("<div>", { text: "Rows from last page: " + s.lastRows }))
    .append(
      // @ts-ignore
      $("<div>", {
        // @ts-ignore
        text: "Working time: " + parseInt(s.workingTime / 1e3) + "s",
      })
    ),
    P({});
}
async function j(e = !1) {
  var t = s.tableSelector.replace(".tablescraper-selected-table", ""),
    n = [];
  s.goodClasses
    .map((e) =>
      e
        .split(" ")
        .map((e) => "." + e)
        .join("")
    )
    .forEach((e) => {
      (e = e.replace(/.tablescraper-selected-row/g, "")).length &&
        n.push(t + " " + e + ":not(:empty)");
    }),
    n.length || n.push(t + " > *:not(:empty)");
  var o = n.join(","),
    r = [];
  let a = s.names;
  for (var i of (e && (a = a.concat(Object.keys(s.config.deletedFields))), a)) {
    var c = s.namePaths[i];
    let e = { target: "text" };
    (e.field_id = i),
      (e.param = ""),
      s.config.headers[i] && (e.field_id = s.config.headers[i]);
    let t = [];
    for (var l of c) {
      let n = "";
      try {
        console.log("Picking selector..."), (n = await U(o, l));
      } catch (e) {
        console.log(e);
      }
      console.log("Selector picked: ", n),
        t.push(n),
        (l = l.split(" ")).filter((e) => "href" == e).length &&
          ((e.target = "prop"), (e.param = "href")),
        l.filter((e) => "src" == e).length &&
          ((e.target = "prop"), (e.param = "src"));
    }
    (e.selector = t.join(",")), r.push(e);
  }
  return [o, r];
}
function U(e, t) {
  return new Promise((n, o) => {
    // @ts-ignore
    chrome.tabs.sendMessage(
      i.id,
      { action: "chooseSelector", rowSelector: e, path: t },
      function (e) {
        e ? n(e.selector) : o(new Error("Could not choose selector!"));
      }
    );
  });
}
d(),
  // @ts-ignore
  $("#wrongTable").click(function () {
    // @ts-ignore
    $("#hot").empty(),
      // @ts-ignore
      chrome.tabs.sendMessage(i.id, { action: "nextTable" }, x);
  }),
  // @ts-ignore
  $("#nextButton").click(function () {
    p('Mark "Next" button or link', "instructions"),
      (s.gettingNext = !0),
      (function e() {
        // @ts-ignore
        chrome.tabs.sendMessage(
          i.id,
          { action: "getNextButton" },
          function (t) {
            s.scraping ||
              (s.gettingNext && e(),
              t.selector &&
                // @ts-ignore
                ($("#startScraping").show(),
                p(
                  '"Next" button located. Press "Start crawling" to get more pages or mark another button/link if marked incorrectly.',
                  "instructions"
                ),
                (s.nextSelector = t.selector),
                localStorage.setItem(
                  "nextSelector:" + s.hostName,
                  t.selector
                )));
          }
        );
      })();
  }),
  // @ts-ignore
  $("#startScraping").click(T);

function mapClassNamesToProperNames(headers) {
  const classNameToProperName = {
    class1: "Proper Name 1",
    class2: "Proper Name 2",
    // Add more mappings as needed
  };
  return headers.map((header) => classNameToProperName[header] || header);
}

function filterEmptyColumns(data) {
  const nonEmptyColumns = data[0].map((_, colIndex) =>
    data.some((row) => row[colIndex] !== "")
  );
  return data.map((row) =>
    row.filter((_, colIndex) => nonEmptyColumns[colIndex])
  );
}

// Modify the CSV export logic
$("#csv")
  .off("click")
  .click(function () {
    console.log("Downloading CSV...");
    r(b);
    P({ download: !0 });

    let e = w(s.data);

    // Map class names to proper names
    e.fields = mapClassNamesToProperNames(e.fields);

    // Filter out empty columns
    e.data = filterEmptyColumns(e.data);

    e.data.forEach((t, n) => {
      t.forEach((t, o) => {
        Array.isArray(t) &&
          (e.data[n][o] = Papa.unparse([t], {
            quotes: !0,
            escapeChar: '"',
          }));
      });
    });

    saveAs(
      new Blob([Papa.unparse(e, { quotes: !0, escapeChar: '"' })], {
        type: "application/octet-stream",
      }),
      N(i.url) + ".csv"
    );
  });

function initializeLocalStorage() {
  const defaultData = {
    userPreferences: {
      theme: "light",
      language: "en",
    },
    usageStats: {
      openedCount: 0,
      lastOpened: null,
    },
  };

  const googleConfig = {
    headers: {
      rgnuSb: "Name",
      "hfpxzc href": "Map Location",
      qBF1Pd: "Name",
      MW4etd: "Ratings",
      W4Efsd: "Business Title",
      "W4Efsd 3": "Location",
      UsdlK: "Phone",
      "lcr4fd href": "Websites",
      rGaJuf: "Ratings",
      "hGz87c 2": "Locations",
      "hGz87c 3": "Phone",
      "zuotBc href": "Websites",
      "zuotBc href 2": "Map Locations",
    },
    deletedFields: {
      UY7F9: true,
      "W4Efsd 2": true,
      "W4Efsd 4": true,
      "W4Efsd 5": true,
      Cw1rxd: true,
      R8c4Qb: true,
      "Cw1rxd 2": true,
      "R8c4Qb 2": true,
      ah5Ghc: true,
      M4A5Cf: true,
      "ah5Ghc 2": true,
      "W4Efsd 6": true,
      doJOZc: true,
      "W4Efsd 7": true,
      "Jn12ke src": true,
      "A5yTVb 3": true,
      "VfPpkd-vQzf8d 3": true,
      "VfPpkd-vQzf8d 2": true,
      "Od1FEc href": true,
      "A5yTVb 2": true,
      A5yTVb: true,
      FjZRNe: true,
      leIgTe: true,
      "Fy57pd src": true,
    },
  };

  if (!localStorage.getItem("extensionData")) {
    localStorage.setItem("extensionData", JSON.stringify(defaultData));
    console.log("Default data added to local storage.");
  } else {
    const data = JSON.parse(localStorage.getItem("extensionData"));
    data.usageStats.openedCount += 1;
    data.usageStats.lastOpened = new Date().toISOString();
    localStorage.setItem("extensionData", JSON.stringify(data));
    console.log("Updated usage stats in local storage.");
  }

  if (!localStorage.getItem("www.google.com-config")) {
    localStorage.setItem("www.google.com-config", JSON.stringify(googleConfig));
    console.log("Default Google config added to local storage.");
  }
}

// Call the function when the extension is opened
document.addEventListener("DOMContentLoaded", initializeLocalStorage);
