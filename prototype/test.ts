// by default the clone clone everything
abstract class Prototype {
	clone(): this {
	  const cloned = Object.create(Prototype.prototype || null);
	  console.log(this);
	  (<any>Object).assign(cloned, this);
	  console.log(cloned);
	  return cloned;
	}
}

class User extends Prototype {
	userName: string;
	email: string;
	constructor(userName: string, email: string) {
	  super();
	  this.userName = userName;
	  this.email = email;
	}
}

class Admin  {
	password: string;
	constructor(user:Prototype, password: string) {
	  (<any>Object).assign(this, user.clone());
	  console.log(Admin.prototype)
	  this.password = password;
	}
}
const taha = new User('taha', 'tahanebti@gamil.com');
const admin: any = new Admin(taha, 'admin')
console.log(admin.userName, admin.email)
Admin.prototype.bark = () => console.log("wow!")
console.log(admin.bark()