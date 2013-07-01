(function () {
    function ViewModel() {
        var self = this;

        self.todoList = ko.observableArray();
        self.todoSummary = ko.observable('');
        self.addTodo = function () {
            var todo = {
                summary: self.todoSummary(),
                done: ko.observable(false)
            };

            self.todoList.push(todo);
            self.todoSummary('');
        };
    }


    ko.applyBindings(new ViewModel());
})();