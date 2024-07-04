const EventEmitter = require('events');

class ExamEmitter extends EventEmitter {}

const examEmitter = new ExamEmitter();

examEmitter.on('examStart', (examId) => {
    console.log(`Exam ${examId} has started.`);
});

examEmitter.on('examEnd', (examId) => {
    console.log(`Exam ${examId} has ended.`);
});

examEmitter.on('examSubmit', (examId, studentId) => {
    console.log(`Student ${studentId} has submitted exam ${examId}.`);
});

function startExam(examId) {
    examEmitter.emit('examStart', examId);
}

function endExam(examId) {
    examEmitter.emit('examEnd', examId);
}

function submitExam(examId, studentId) {
    examEmitter.emit('examSubmit', examId, studentId);
}

startExam('101');
submitExam('101', 'Student');
endExam('101');