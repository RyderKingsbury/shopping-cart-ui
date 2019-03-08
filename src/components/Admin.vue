<template>
<div>
    <h1>Admin</h1>
    <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="admin-form-right">
            <h3>Add a Product</h3>
            <b-form-input id="name" type="text" required placeholder="Name of Product" />
            <b-form-input id="SKU" type="text" required placeholder="SKU of Product" />
            <b-form-input id="price" type="number" required placeholder="Price" />
            <b-form-input id="image" type="text" required placeholder="URL of Product" />
            <b-form-textarea id="description" type="text" required placeholder="Description" />
            <b-button type="submit" variant="info">Submit</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
        </b-form>
    </b-container>
    <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="admin-form-left">
            <h3>Edit a Product</h3>
            <b-form-input id="name" type="text" required placeholder="Name of Product" />
            <b-form-input id="SKU" type="text" required placeholder="SKU of Product" />
            <b-form-input id="price" type="number" required placeholder="Price" />
            <b-form-input id="image" type="text" required placeholder="URL of Product" />
            <b-form-textarea id="description" type="text" required placeholder="Description" />
            <b-button type="submit" variant="info">Submit</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
        </b-form>
    </b-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            foods: [{
                text: 'Select One',
                value: null
            }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            /* Reset our form values */
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            /* Trick to reset/clear native browser form validation state */
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style>
.admin-form-right input, textarea, button{
  margin-bottom: 1em;
}
.admin-form-left input, textarea, button{
  margin-bottom: 1em;
}
.admin-form-right {
  float: right;
  margin-right: 1em;
  width: 38vw;
}
.admin-form-left {
  float: left;
  margin-right: 1em;
  width: 38vw;
} 
</style>
