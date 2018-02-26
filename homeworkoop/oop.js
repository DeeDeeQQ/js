function Student ({name, surname, grades})
{
    this.name = name;
    this.surname = surname;
    this.grades = grades;

    Student.prototype.fullname = function()
    {
        return this.name + " " + this.surname;
    }

    Student.prototype.gradesAverage = function()
    {
        var sum = 0;
        for (var i = 0; i < this.grades[i]; i++ ) sum += this.grades[i];
        if (sum === 0)
        {
            return sum;
        }
        sum = sum / this.grades.length;
        return sum.toFixed(2);
    }

    if(!Student.list)
    {
        Student.list = [];
    }
    Student.list.push(this);

    Student.showAllStudents = function()
    {
        var full = Student.list.map(function (item)
        {
             return {'ssulka' : item, 'fullName' : item.fullname(),'averageGrade' : item.gradesAverage()};
        });

        full.sort(function (a,b){
            return b.averageGrade - a.averageGrade;
        });

        if(this == "BestStudent"){
            return full;
        }
        var msg = [];

        full.forEach(function (item, i){
            msg.push(i + ":" + "\"" + item.fullName + ". Средний бал = " + item.averageGrade + "\"");
          });

        return msg;
    }
    Student.showBestStudent = function ()
    {
        var full = Student.showAllStudents.call("BestStudent");
        var best = full.shift();
        if(this == "Best"){
            return best;
        }
        var msg = "\"" + best.fullName + " - лучший студент курса. Средний бал = " + best.averageGrade + "\"";
        return msg;
    }
    Student.bestStudent = function () {
        var a = Student.showBestStudent.call("Best");
        return a.ssulka;
    }
}

var student1 = new Student ({name: 'Ivan', surname: 'Ivanov', grades: [1,1,5]});
var student4 = new Student ({name: 'Zina', surname: 'Zinova', grades: [4,5,5]});
var student5 = new Student ({name: 'Petr', surname: 'Petrov', grades: [8,5,5]});
var student2 = new Student ({name: 'Ivsan', surname: 'Loran', grades: [4,1,5]});
var student3 = new Student ({name: 'Lolo', surname: 'Pololo', grades: [4,3,5]});

