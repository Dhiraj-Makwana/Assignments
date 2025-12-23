public class linearSearch{
    public static void main(String args[]) {
        int arr[] = {5,3,6,7,3,1,0};
        int target = 1;

        for(int i=0; i<=arr.length; i++) {
            if(arr[i] == target) {
                System.out.println(target+ " is at index "+ i);
            }
            else {
                System.out.println(target+ " is not found");
            }
        }
    }
}