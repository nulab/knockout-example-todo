(function () {
    function ViewModel() {
        var self = this;

        self.todoList = ko.observableArray([
                                               {summary: 'test', done: ko.observable(false)}
                                           ]);
        self.todoSummary = ko.observable('');
        self.addTodo = function () {
            if (self.canAddTodo()) {
                var todo = {
                    summary: self.todoSummary(),
                    done: ko.observable(false)
                };

                self.todoList.push(todo);
                self.todoSummary('');
            }
        };

        self.canAddTodo = ko.computed(function () {
            return self.todoSummary().length > 0;
        });

        self.deleteTodo = function (todo) {
            self.todoList.remove(todo);
        };

        self.archive = function () {
            self.todoList.remove(function (todo) {
                return todo.done();
            });
        };
    }


    ko.applyBindings(new ViewModel());
})();