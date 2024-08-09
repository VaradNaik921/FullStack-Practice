    let Varad = {
        data: [],
        i: 0,
        
        push(element) {
            this.data[this.i] = element;
            this.i++;
        },

        pop() {
            if (this.empty()) {
                return null;
            }
            this.i--;
            const element = this.data[this.i];
            delete this.data[this.i];
            return element;
        },

        empty() {
            return this.i === 0;
        },
    };