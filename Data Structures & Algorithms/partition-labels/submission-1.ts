class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S: string): number[] {
        const res:number[]=[]
        const lastIndexOf:Map<string,number>=new Map()
        for(let i =0; i<S.length;i++){
            lastIndexOf.set(S[i],i)
        }

        let size=0, end=0;
        for (let i =0; i<S.length;i++){
            size+=1;
            end=Math.max(lastIndexOf.get(S[i]),end)
            if(end===S.length){
                return res
            }
            if(i===end){
                res.push(size);
                size=0;
            }
            
            
        }




        return res
    }
}
