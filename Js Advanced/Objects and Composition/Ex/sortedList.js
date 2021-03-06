function createSortedList() {
    return {
        size: 0,
        list: [],
        add(item) {
            this.size++;
            this.list.push(item);
            this.list.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.list.length) {
                this.size--;
                this.list.splice(index, 1);
            }
        },
         get(index){
            if (index >= 0 && index < this.list.length){
                return this.list[index];
            }
         },
    };
}
