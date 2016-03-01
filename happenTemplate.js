
var library = (function () {
    return {
        TimeStamp: (function () {
            return {
                UnixTimestamp: function () {
                    var date = new Date();
                    var unixTimestamp = Math.floor(date.valueOf() / 1000);
                    return String(unixTimestamp);
                },
                UnixMillisecond: function () {
                    var date = new Date();
                    var unixTimestamp = date.valueOf();
                    return String(unixTimestamp);
                }
            }
        })(),
        Local: (function () {
            return {
                Time: (function () {
                    return {
                        WithSeconds: function () {
                            var date = new Date();
                            var hour = date.getHours();
                            //am/pm distinction
                            if (hour > 11) {
                                var ampm = ("PM");
                            } else {
                                var ampm = ('AM');
                            }
                            //for 12 hour clocks    
                            if (hour > 12) {
                                var hour = hour - 12;
                            }
                            var minutes = date.getMinutes();
                            if (minutes < 10) {
                                var dblmin = String("0") + String(minutes);
                            } else {
                                var dblmin = String(minutes);
                            };
                            var seconds = date.getSeconds();
                            if (seconds < 10) {
                                var dblsec = String("0") + String(seconds);
                            } else {
                                var dblsec = String(seconds);
                            };




                            return (hour + ":" + dblmin + ":" + dblsec + ' ' + ampm);
                        },
                        WithOutSeconds: function () {
                            var date = new Date();
                            var hour = date.getHours();
                            //am/pm distinction
                            if (hour > 11) {
                                var ampm = ("PM");
                            } else {
                                var ampm = ('AM');
                            }
                            //for 12 hour clocks    
                            if (hour > 12) {
                                var hour = hour - 12;
                            }
                            var minutes = date.getMinutes();
                            if (minutes < 10) {
                                var dblmin = String("0") + String(minutes);
                            } else {
                                var dblmin = String(minutes);
                            };
                            return (hour + ":" + dblmin + ' ' + ampm);
                        }
                    }
                })(),
                MDY: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var month = date.getMonth() + 1;
                            var day = date.getDate();
                            var year = date.getFullYear();

                            return String(month + "/" + day + "/" + year);
                        },
                        Name: function () {
                            var date = new Date();
                            var month = date.getMonth();
                            var name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                            var currentMonth = name[month];
                            var day = date.getDate();
                            var year = date.getFullYear();

                            return String(currentMonth + ' ' + day + ", " + year);
                        }
                    }
                })(),
            }
        })(),
        Second: (function () {
            return {
                Second: function () {
                    var date = new Date();
                    var seconds = date.getSeconds();
                    return String(seconds);
                },
                DblDigit: function () {
                    var date = new Date();
                    var seconds = date.getSeconds();
                    if (seconds < 10) {
                        return String("0") + String(seconds);
                    } else {
                        return String(seconds);
                    }
                }
            }
        })(),
        Minute: (function () {
            return {
                Minute: function () {
                    var date = new Date();
                    var minutes = date.getMinutes();
                    return String(minutes);
                },
                DblDigit: function () {
                    var date = new Date();
                    var minutes = date.getMinutes();
                    if (minutes < 10) {
                        return String("0") + String(minutes);
                    } else {
                        return String(minutes);
                    }
                }
            }
        })(),
        Hour: (function () {
            return {
                TwentyFourHour: function () {
                    var date = new Date();
                    var hour = date.getHours();
                    return String(hour);
                },
                TwelveHour: function () {
                    var date = new Date();
                    var hour = date.getHours();
                    if (hour > 12) {
                        var hour = hour - 12;
                    }
                    return String(hour);
                },
                AMPM: (function () {
                    return {
                        UpperCase: function () {
                            var date = new Date();
                            var ampm = date.getHours();
                            console.log(ampm);
                            if (ampm > 11) {
                                return ("PM");
                            } else {
                                return ('AM');
                            }
                        },
                        LowerCase: function () {
                            var date = new Date();
                            var hours = date.getHours();
                            console.log(hours);
                            if (hours > 11) {
                                return ("pm");
                            } else {
                                return ('am');
                            }
                        }
                    }
                })()
            }
        })(),
        Week: (function () {
            return {
                DayOfWeek: function () {
                    var date = new Date();
                    var day = date.getDay();
                    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var dayOfWeek = weekdays[day];
                    return dayOfWeek;

                },
                AbrDayOfWeek: function () {
                    var date = new Date();
                    var day = date.getDay();
                    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    var dayOfWeek = weekdays[day];
                    return dayOfWeek;
                },
                FirstTwoOfWeek: function () {
                    var date = new Date();
                    var day = date.getDay();
                    var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                    var dayOfWeek = weekdays[day];
                    return dayOfWeek;
                },
                WeekOfYear: function () {
                    var now = new Date();
                    var start = new Date(now.getFullYear(), 0, 0);
                    var diff = (now - start);
                    var oneDay = 1000 * 60 * 60 * 24;
                    var day = Math.floor(diff / oneDay);
                    var weeks = Math.round(day / 7)
                    return String(weeks);
                }
            }
        })(),
        Month: (function () {
            return {
                DateOfMonth: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var day = date.getDate();
                            return String(day);
                        },
                        Ordinal: function () {
                            var date = new Date();
                            var day = date.getDate();
                            console.log(day);
                            function nth(day) {
                                if (day > 3 && day < 21) {
                                    return 'th';
                                } else {
                                    switch (day % 10) {
                                        case 1:
                                            return "st";
                                            break;
                                        case 2:
                                            return "nd";
                                            break;
                                        case 3:
                                            return "rd";
                                            break;
                                        default: return "th";
                                    };
                                }
                            };
                            return String(day) + nth(day);
                        },
                        DateDblDigit: function () {
                            var date = new Date();
                            var day = date.getDate();
                            if (day < 10) {
                                return String('0' + day)
                            };
                        }
                    }
                })(),
                MonthNumber: function () {
                    var date = new Date();
                    var month = date.getMonth() + 1;
                    return String(month);
                },
                MonthNumberDblDigit: function () {
                    var date = new Date();
                    var month = date.getMonth() + 1;
                    if (month < 10) {
                        return String('0' + month)
                    };
                },
                AbrOfCurrentMonth: function () {
                    var date = new Date();
                    var month = date.getMonth();
                    var abbreviation = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var abrMonth = abbreviation[month];
                    return abrMonth;
                },
                CurrentMonth: function () {
                    var date = new Date();
                    var month = date.getMonth();
                    var name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var currentMonth = name[month];
                    return currentMonth;
                }
            }
        })(),
        Year: (function () {
            return {
                DayOfYear: (function () {
                    return {
                        Numeral: function () {
                            var now = new Date();
                            var start = new Date(now.getFullYear(), 0, 0);
                            var diff = (now - start);
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);
                            console.log(day);
                            return String(day);
                        },
                        Ordinal: function () {
                            var now = new Date();
                            var start = new Date(now.getFullYear(), 0, 0);
                            var diff = (now - start);
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);

                            function nth(day) {
                                if (day > 3 && day < 21) {
                                    return 'th';
                                } else {
                                    switch (day % 10) {
                                        case 1:
                                            return "st";
                                            break;
                                        case 2:
                                            return "nd";
                                            break;
                                        case 3:
                                            return "rd";
                                            break;
                                        default: return "th";
                                    };
                                }
                            };
                            return String(day) + nth(day);
                        }
                    }
                })(),
                YearFull: function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    return String(year);
                },
                YearAbr: function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    var yearShort = year - 2000;
                    return String(yearShort);
                }
            }
        })(),
        Defaults: function () {
            var date = new Date();
            var year = date.getFullYear();
            var monthish = date.getMonth() + 1;
            if (monthish < 10) {
                var month = String("0") + String(monthish);
            } else {
                var month = monthish;
            }
            var dayish = date.getDate();
            if (dayish < 10) {
                var day = (String('0') + String(dayish));
            } else {
                var day = dayish;
            }
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();



            return String(year + '-' + month + '-' + day + 'T' + hour + ':' + minutes + ':' + seconds);
        }
    }
})();