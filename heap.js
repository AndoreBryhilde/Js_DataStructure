//the comparator decide the heap is minheap or maxheap
class Heap {
    constructor(comparator,array){
        this.comparator=comparator;
        this.heap=this.heapify(array);
    }

    heapify(array) {
        const firstParentIdx=~~((array.length-2)/2);
        for (let currentIdx=firstParentIdx;currentIdx>=0;currentIdx--){
            this.siftDown(currentIdx,array.length-1,array);
        }
        return array;
    }

    siftDown(currentIdx,endIdx,heap) {
        let childOneIdx = 2*currentIdx+1;
        while(childOneIdx<=endIdx){
            const childTwoIdx=2*currentIdx+2<=endIdx?2*currentIdx+2:-1;
            let idxToSwap;
            if(childTwoIdx!==-1&&this.comparator(heap[childTwoIdx],heap[childOneIdx])){
                idxToSwap=childTwoIdx;
            }else{idxToSwap=childOneIdx;}
            if(this.comparator(heap[idxToSwap],heap[currentIdx])){
                this.swap(idxToSwap, currentIdx, heap);
                currentIdx=idxToSwap;
                childOneIdx=2*currentIdx+1;
            }else{return;}
        }
    }

    siftUp(currentIdx, heap) {
        let parentIdx = ~~((currentIdx-1)/2);
        while(currentIdx>0&&this.comparator(heap[currentIdx],heap[parentIdx])) {
            this.swap(currentIdx,parentIdx,heap);
            currentIdx=parentIdx;
            parentIdx=~~((currentIdx-1)/2);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length-1,this.heap);
    }

    remove(){
        this.swap(0,this.heap.length-1,this.heap);
        const valueToRemove=this.heap.pop();
        this.siftDown(0,this.heap.length-1,this.heap);
        return valueToRemove;
    }

    peek(){return this.heap.at(0)}
        
    swap(i,j,array){const temp = array[i];array[i]=array[j];array[j]=temp;}
 
    toArray(){return this.heap;}
    
    get length(){return this.heap.length;}
}
