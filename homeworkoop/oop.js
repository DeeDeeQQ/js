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
}

Student.prepareArray = function () {
    var full = Student.list.map(function (item)
    {
        return {'ssulka' : item, 'fullName' : item.fullname(),'averageGrade' : item.gradesAverage()};
    });

    full.sort(function (a,b){
        return b.averageGrade - a.averageGrade;
    });
    return full;
}

Student.prepareBest = function () {
    var full = Student.prepareArray.call();
    var best = full.shift();
    return best
}

Student.showAllStudents = function()
{
    var full = Student.prepareArray.call()
    var msg = [];

    full.forEach(function (item, i){
        msg.push(i + ":" + "\"" + item.fullName + ". Средний бал = " + item.averageGrade + "\"");
    });

    return msg;
}

Student.showBestStudent = function ()
{
    best = Student.prepareBest.call();
    var msg = "\"" + best.fullName + " - лучший студент курса. Средний бал = " + best.averageGrade + "\"";
    return msg;
}

Student.bestStudent = function () {
    best = Student.prepareBest.call();
    return best.ssulka;
}

var student1 = new Student ({name: 'Ivan', surname: 'Ivanov', grades: [1,1,5]});
var student4 = new Student ({name: 'Ivan', surname: 'Ivanov', grades: [4,5,5]});
var student5 = new Student ({name: 'Ivan', surname: 'Ivanov', grades: [8,5,5]});
var student2 = new Student ({name: 'Ivsan', surname: 'Ivasnov', grades: [4,1,5]});
var student3 = new Student ({name: 'Ivaaan', surname: 'Ivaaanov', grades: [4,3,5]});


console.log(Student.bestStudent());
