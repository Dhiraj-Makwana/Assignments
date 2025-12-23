public class linearSearch{
    public static int search(int arr[], int target) {
        for(int i=0; i < arr.length; i++) {
            if(arr[i] == target) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String args[]) {
        int arr[] = {5,3,6,7,3,1,0};
        int target = 0;

        if(search(arr, target) != -1) {
            System.out.println(target+ " is at index "+ search(arr, target));
        }
        else {
            System.out.println(target+ " is not found");
        }
    }
}