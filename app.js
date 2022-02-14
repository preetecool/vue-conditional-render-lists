const app = Vue.createApp({
	data() {
		return {
			taskInput: "",
			tasks: [],
			isVisible: true,
		};
	},
	computed: {
		listClass() {
			if (!this.isVisible) return "hidden";
			else return null;
		},
		showHide() {
			if (this.isVisible) return "Hide";
			else return "Show";
		},
	},
	methods: {
		addTask() {
			if (this.taskInput === "") return null;
			this.tasks.push(this.taskInput);
			this.taskInput = "";
		},
		toggleList() {
			this.isVisible = !this.isVisible;
		},
	},
});
app.mount("#assignment");
